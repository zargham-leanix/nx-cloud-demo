import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo8Component } from './lib39-demo8.component';

describe('Lib39Demo8Component', () => {
  let component: Lib39Demo8Component;
  let fixture: ComponentFixture<Lib39Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
