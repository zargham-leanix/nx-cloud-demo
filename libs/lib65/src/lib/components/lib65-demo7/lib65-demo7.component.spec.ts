import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo7Component } from './lib65-demo7.component';

describe('Lib65Demo7Component', () => {
  let component: Lib65Demo7Component;
  let fixture: ComponentFixture<Lib65Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
