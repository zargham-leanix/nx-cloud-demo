import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo34Component } from './lib70-demo34.component';

describe('Lib70Demo34Component', () => {
  let component: Lib70Demo34Component;
  let fixture: ComponentFixture<Lib70Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
