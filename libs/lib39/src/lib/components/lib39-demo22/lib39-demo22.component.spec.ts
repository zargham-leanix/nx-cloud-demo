import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo22Component } from './lib39-demo22.component';

describe('Lib39Demo22Component', () => {
  let component: Lib39Demo22Component;
  let fixture: ComponentFixture<Lib39Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
