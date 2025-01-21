import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo12Component } from './lib81-demo12.component';

describe('Lib81Demo12Component', () => {
  let component: Lib81Demo12Component;
  let fixture: ComponentFixture<Lib81Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
