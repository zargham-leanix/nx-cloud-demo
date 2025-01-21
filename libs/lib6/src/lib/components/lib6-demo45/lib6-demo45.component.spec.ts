import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo45Component } from './lib6-demo45.component';

describe('Lib6Demo45Component', () => {
  let component: Lib6Demo45Component;
  let fixture: ComponentFixture<Lib6Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
