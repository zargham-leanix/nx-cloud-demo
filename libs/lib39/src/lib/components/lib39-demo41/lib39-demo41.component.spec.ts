import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo41Component } from './lib39-demo41.component';

describe('Lib39Demo41Component', () => {
  let component: Lib39Demo41Component;
  let fixture: ComponentFixture<Lib39Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
