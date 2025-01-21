import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo7Component } from './lib13-demo7.component';

describe('Lib13Demo7Component', () => {
  let component: Lib13Demo7Component;
  let fixture: ComponentFixture<Lib13Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
