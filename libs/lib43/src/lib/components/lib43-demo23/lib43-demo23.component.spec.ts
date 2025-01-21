import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo23Component } from './lib43-demo23.component';

describe('Lib43Demo23Component', () => {
  let component: Lib43Demo23Component;
  let fixture: ComponentFixture<Lib43Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
