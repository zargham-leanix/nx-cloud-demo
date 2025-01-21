import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo34Component } from './lib61-demo34.component';

describe('Lib61Demo34Component', () => {
  let component: Lib61Demo34Component;
  let fixture: ComponentFixture<Lib61Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
