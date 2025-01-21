import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo1Component } from './lib43-demo1.component';

describe('Lib43Demo1Component', () => {
  let component: Lib43Demo1Component;
  let fixture: ComponentFixture<Lib43Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
