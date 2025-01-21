import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo31Component } from './lib39-demo31.component';

describe('Lib39Demo31Component', () => {
  let component: Lib39Demo31Component;
  let fixture: ComponentFixture<Lib39Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
