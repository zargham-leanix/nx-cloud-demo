import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo3Component } from './lib39-demo3.component';

describe('Lib39Demo3Component', () => {
  let component: Lib39Demo3Component;
  let fixture: ComponentFixture<Lib39Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
