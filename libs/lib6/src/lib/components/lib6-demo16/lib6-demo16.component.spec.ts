import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo16Component } from './lib6-demo16.component';

describe('Lib6Demo16Component', () => {
  let component: Lib6Demo16Component;
  let fixture: ComponentFixture<Lib6Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
