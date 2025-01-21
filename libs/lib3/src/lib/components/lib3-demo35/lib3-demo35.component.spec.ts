import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo35Component } from './lib3-demo35.component';

describe('Lib3Demo35Component', () => {
  let component: Lib3Demo35Component;
  let fixture: ComponentFixture<Lib3Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
