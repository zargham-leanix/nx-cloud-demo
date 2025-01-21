import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo20Component } from './lib39-demo20.component';

describe('Lib39Demo20Component', () => {
  let component: Lib39Demo20Component;
  let fixture: ComponentFixture<Lib39Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
