import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo25Component } from './lib6-demo25.component';

describe('Lib6Demo25Component', () => {
  let component: Lib6Demo25Component;
  let fixture: ComponentFixture<Lib6Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
