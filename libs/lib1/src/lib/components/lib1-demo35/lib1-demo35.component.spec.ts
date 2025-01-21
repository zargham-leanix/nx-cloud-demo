import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo35Component } from './lib1-demo35.component';

describe('Lib1Demo35Component', () => {
  let component: Lib1Demo35Component;
  let fixture: ComponentFixture<Lib1Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
