import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo49Component } from './lib43-demo49.component';

describe('Lib43Demo49Component', () => {
  let component: Lib43Demo49Component;
  let fixture: ComponentFixture<Lib43Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
