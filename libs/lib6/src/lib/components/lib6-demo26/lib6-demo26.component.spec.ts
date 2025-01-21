import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo26Component } from './lib6-demo26.component';

describe('Lib6Demo26Component', () => {
  let component: Lib6Demo26Component;
  let fixture: ComponentFixture<Lib6Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
