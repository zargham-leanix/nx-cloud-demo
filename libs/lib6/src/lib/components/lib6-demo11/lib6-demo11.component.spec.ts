import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo11Component } from './lib6-demo11.component';

describe('Lib6Demo11Component', () => {
  let component: Lib6Demo11Component;
  let fixture: ComponentFixture<Lib6Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
