import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo35Component } from './lib6-demo35.component';

describe('Lib6Demo35Component', () => {
  let component: Lib6Demo35Component;
  let fixture: ComponentFixture<Lib6Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
