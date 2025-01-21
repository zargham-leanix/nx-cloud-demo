import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo12Component } from './lib9-demo12.component';

describe('Lib9Demo12Component', () => {
  let component: Lib9Demo12Component;
  let fixture: ComponentFixture<Lib9Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
