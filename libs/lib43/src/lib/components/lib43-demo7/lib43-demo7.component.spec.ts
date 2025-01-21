import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo7Component } from './lib43-demo7.component';

describe('Lib43Demo7Component', () => {
  let component: Lib43Demo7Component;
  let fixture: ComponentFixture<Lib43Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
