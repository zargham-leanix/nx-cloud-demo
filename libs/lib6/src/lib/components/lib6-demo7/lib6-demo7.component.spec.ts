import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo7Component } from './lib6-demo7.component';

describe('Lib6Demo7Component', () => {
  let component: Lib6Demo7Component;
  let fixture: ComponentFixture<Lib6Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
