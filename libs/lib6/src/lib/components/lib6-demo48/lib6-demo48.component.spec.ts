import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo48Component } from './lib6-demo48.component';

describe('Lib6Demo48Component', () => {
  let component: Lib6Demo48Component;
  let fixture: ComponentFixture<Lib6Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
