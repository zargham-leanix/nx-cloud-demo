import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo7Component } from './lib69-demo7.component';

describe('Lib69Demo7Component', () => {
  let component: Lib69Demo7Component;
  let fixture: ComponentFixture<Lib69Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
