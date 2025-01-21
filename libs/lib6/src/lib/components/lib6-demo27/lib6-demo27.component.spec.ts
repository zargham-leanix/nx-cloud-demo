import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo27Component } from './lib6-demo27.component';

describe('Lib6Demo27Component', () => {
  let component: Lib6Demo27Component;
  let fixture: ComponentFixture<Lib6Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
