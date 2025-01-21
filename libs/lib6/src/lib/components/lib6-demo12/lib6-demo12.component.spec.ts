import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo12Component } from './lib6-demo12.component';

describe('Lib6Demo12Component', () => {
  let component: Lib6Demo12Component;
  let fixture: ComponentFixture<Lib6Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
