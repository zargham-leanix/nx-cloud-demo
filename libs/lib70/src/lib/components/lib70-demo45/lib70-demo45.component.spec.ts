import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo45Component } from './lib70-demo45.component';

describe('Lib70Demo45Component', () => {
  let component: Lib70Demo45Component;
  let fixture: ComponentFixture<Lib70Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
