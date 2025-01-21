import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo42Component } from './lib6-demo42.component';

describe('Lib6Demo42Component', () => {
  let component: Lib6Demo42Component;
  let fixture: ComponentFixture<Lib6Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
