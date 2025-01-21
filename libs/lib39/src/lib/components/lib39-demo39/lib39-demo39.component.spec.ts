import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo39Component } from './lib39-demo39.component';

describe('Lib39Demo39Component', () => {
  let component: Lib39Demo39Component;
  let fixture: ComponentFixture<Lib39Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
