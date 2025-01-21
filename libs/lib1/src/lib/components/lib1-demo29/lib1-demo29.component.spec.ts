import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo29Component } from './lib1-demo29.component';

describe('Lib1Demo29Component', () => {
  let component: Lib1Demo29Component;
  let fixture: ComponentFixture<Lib1Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
