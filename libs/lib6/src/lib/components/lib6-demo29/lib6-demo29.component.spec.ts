import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo29Component } from './lib6-demo29.component';

describe('Lib6Demo29Component', () => {
  let component: Lib6Demo29Component;
  let fixture: ComponentFixture<Lib6Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
