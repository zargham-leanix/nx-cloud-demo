import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo34Component } from './lib1-demo34.component';

describe('Lib1Demo34Component', () => {
  let component: Lib1Demo34Component;
  let fixture: ComponentFixture<Lib1Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
