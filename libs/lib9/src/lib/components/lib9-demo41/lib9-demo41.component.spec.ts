import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo41Component } from './lib9-demo41.component';

describe('Lib9Demo41Component', () => {
  let component: Lib9Demo41Component;
  let fixture: ComponentFixture<Lib9Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
