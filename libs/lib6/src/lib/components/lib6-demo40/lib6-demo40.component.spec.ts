import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo40Component } from './lib6-demo40.component';

describe('Lib6Demo40Component', () => {
  let component: Lib6Demo40Component;
  let fixture: ComponentFixture<Lib6Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
