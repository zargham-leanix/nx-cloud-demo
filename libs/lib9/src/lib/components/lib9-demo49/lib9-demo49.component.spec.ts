import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo49Component } from './lib9-demo49.component';

describe('Lib9Demo49Component', () => {
  let component: Lib9Demo49Component;
  let fixture: ComponentFixture<Lib9Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
