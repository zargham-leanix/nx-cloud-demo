import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo4Component } from './lib9-demo4.component';

describe('Lib9Demo4Component', () => {
  let component: Lib9Demo4Component;
  let fixture: ComponentFixture<Lib9Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
