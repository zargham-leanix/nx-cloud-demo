import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo14Component } from './lib6-demo14.component';

describe('Lib6Demo14Component', () => {
  let component: Lib6Demo14Component;
  let fixture: ComponentFixture<Lib6Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
