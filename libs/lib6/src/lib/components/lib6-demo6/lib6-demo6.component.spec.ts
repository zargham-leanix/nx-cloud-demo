import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo6Component } from './lib6-demo6.component';

describe('Lib6Demo6Component', () => {
  let component: Lib6Demo6Component;
  let fixture: ComponentFixture<Lib6Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
