import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo34Component } from './lib3-demo34.component';

describe('Lib3Demo34Component', () => {
  let component: Lib3Demo34Component;
  let fixture: ComponentFixture<Lib3Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
