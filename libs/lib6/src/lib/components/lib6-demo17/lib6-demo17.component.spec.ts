import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo17Component } from './lib6-demo17.component';

describe('Lib6Demo17Component', () => {
  let component: Lib6Demo17Component;
  let fixture: ComponentFixture<Lib6Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
