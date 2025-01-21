import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo46Component } from './lib6-demo46.component';

describe('Lib6Demo46Component', () => {
  let component: Lib6Demo46Component;
  let fixture: ComponentFixture<Lib6Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
