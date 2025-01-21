import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo35Component } from './lib9-demo35.component';

describe('Lib9Demo35Component', () => {
  let component: Lib9Demo35Component;
  let fixture: ComponentFixture<Lib9Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
