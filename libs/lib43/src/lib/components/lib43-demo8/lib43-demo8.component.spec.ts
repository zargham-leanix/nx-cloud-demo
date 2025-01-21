import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo8Component } from './lib43-demo8.component';

describe('Lib43Demo8Component', () => {
  let component: Lib43Demo8Component;
  let fixture: ComponentFixture<Lib43Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
