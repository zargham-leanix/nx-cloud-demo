import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo34Component } from './lib6-demo34.component';

describe('Lib6Demo34Component', () => {
  let component: Lib6Demo34Component;
  let fixture: ComponentFixture<Lib6Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
