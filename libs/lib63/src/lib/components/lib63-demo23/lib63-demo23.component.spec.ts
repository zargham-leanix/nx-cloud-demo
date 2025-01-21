import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo23Component } from './lib63-demo23.component';

describe('Lib63Demo23Component', () => {
  let component: Lib63Demo23Component;
  let fixture: ComponentFixture<Lib63Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
