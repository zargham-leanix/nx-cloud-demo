import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo43Component } from './lib6-demo43.component';

describe('Lib6Demo43Component', () => {
  let component: Lib6Demo43Component;
  let fixture: ComponentFixture<Lib6Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
