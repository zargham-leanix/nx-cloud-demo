import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo29Component } from './lib3-demo29.component';

describe('Lib3Demo29Component', () => {
  let component: Lib3Demo29Component;
  let fixture: ComponentFixture<Lib3Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
