import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo15Component } from './lib9-demo15.component';

describe('Lib9Demo15Component', () => {
  let component: Lib9Demo15Component;
  let fixture: ComponentFixture<Lib9Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
