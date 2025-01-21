import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo2Component } from './lib6-demo2.component';

describe('Lib6Demo2Component', () => {
  let component: Lib6Demo2Component;
  let fixture: ComponentFixture<Lib6Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
