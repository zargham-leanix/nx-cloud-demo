import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo2Component } from './lib43-demo2.component';

describe('Lib43Demo2Component', () => {
  let component: Lib43Demo2Component;
  let fixture: ComponentFixture<Lib43Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
