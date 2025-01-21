import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo19Component } from './lib39-demo19.component';

describe('Lib39Demo19Component', () => {
  let component: Lib39Demo19Component;
  let fixture: ComponentFixture<Lib39Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
